import { Platform } from 'ionic-angular';

const DB_NAME: string = '__ionicstorage';
const win: any = window;

export abstract class SqlService {
  private _db: any;
  public table = 'kv';

  constructor(public platform: Platform, public tab :any) {
    if (tab !=null) {
    this.table = tab;
    }
    this.platform.ready().then(() => {
      if (win.sqlitePlugin) {
        this._db = win.sqlitePlugin.openDatabase({
          name: DB_NAME,
          location: 2,
          createFromLocation: 0
        });
      } else {
        console.warn('SQLite plugin not installed, falling back to WebSQL.');
        this._db = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
      }
      this._tryInit();
    });
  }
  
  

  /** Initialize the DB with our required tables */
  _tryInit() {
    this.query('CREATE TABLE IF NOT EXISTS '+this.table+' (key text primary key, value text)')
      .catch(err => {
        console.error('Unable to create initial storage tables', err.tx, err.err);
      });
  }

  /**
   * Perform an arbitrary SQL operation on the database. Use this method
   * to have full control over the underlying database through SQL operations
   * like SELECT, INSERT, and UPDATE.
   *
   * @param {string} query the query to run
   * @param {array} params the additional params to use for query placeholders
   * @return {Promise} that resolves or rejects with an object of the form 
   * { tx: Transaction, res: Result (or err)}
   */
  query(query: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this._db.transaction((tx: any) => {
          tx.executeSql(query, params,
            (tx: any, res: any) => resolve({ tx: tx, res: res }),
            (tx: any, err: any) => reject({ tx: tx, err: err }));
        },
          (err: any) => reject({ err: err }));
      } catch (err) {
        reject({ err: err });
      }
    });
  }

  /** GET the value in the database identified by the given key. */
  get(key: string): Promise<any> {
    return this.query('select key, value from '+this.table+' where key = ? limit 1', [key])
      .then(data => {
        if (data.res.rows.length > 0) {
          return data.res.rows.item(0).value;
        } else return null;
      });
  }
  
    /** GET all registers */
  getAll(): Promise<any> {
    return this.query('select key, value from '+this.table)
      .then(data => {
        if (data.res.rows.length > 0) {
          return data.res.rows;
        }
      });
  }

  /** SET the value in the database for the given key. */
  set(key: string, value: any): Promise<any> {
    return this.query('insert into '+this.table+ ' (key, value) values (?, ?)', [key, value]);
  }
  
  update(key: string, value: any): Promise<any> {
    console.log('update '+this.table+ ' set value = ?  where key = ?', [value, key]);
    return this.query('update '+this.table+ ' set value = ?  where key = ? ', [value, key]);
  }

  /** REMOVE the value in the database for the given key. */
  remove(key: string): Promise<any> {
    return this.query('delete from '+this.table+' where key = ?', [key]);
  }
  
  removeAll(): Promise<any> {
    return this.query('delete from '+this.table+'');
  }
}