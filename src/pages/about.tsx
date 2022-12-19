import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useEffect } from 'react';
import { useHistory } from 'react-router';

const About: React.FC = () => {

    useEffect(() => {
        console.log("First wisit: About")        
    }, []);

    const history = useHistory()
    useEffect(() => {
        history.listen((location) => {
            if (location.pathname == "/about"){
              console.log("Rewisiting: About")  
            }
        })
    }, [history])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div className="ion-padding">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default About;