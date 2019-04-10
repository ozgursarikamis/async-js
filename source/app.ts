import '../sass/style.scss';
import Map from './map/Map'; 

class App {
    Start(): void {
        Map.Start();  
        Map.LoadData();
    }
}

const app = new App();
app.Start();