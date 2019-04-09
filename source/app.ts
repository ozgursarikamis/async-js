import '../sass/style.scss';
import Map from './map/Map'; 

class App {
    static Start(): void {
        Map.Start();  
        Map.LoadData();
    }
}

App.Start();