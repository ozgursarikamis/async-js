import '../sass/style.scss';
import Map from './map/Map'; 

class App {
    Start(): void {
        Map.Start();  
        Map.LoadData();
    }
}

function getElementById(elementId:string) : string | undefined {
    console.log('elementId', elementId);
    return "";
}
const app = new App();
app.Start();