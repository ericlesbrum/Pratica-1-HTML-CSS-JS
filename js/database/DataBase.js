export class DataBase {
    Add(key, object) {
        localStorage.setItem(key, object);
    }
    Get(key) {
        return localStorage.getItem(key);
    }
    Remove(key) {
        localStorage.removeItem(key);
    }
}