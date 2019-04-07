import '../sass/style.scss';
import Map from './map/Map';
import Database from './helpers/mongo';

class App {
    static Start(): void {
        Map.Start(); 
        const db = new Database("TestData");
        db.Get(null, (docs: any) => {
            console.log('docs :', docs);
        }); 
    }
}

App.Start();