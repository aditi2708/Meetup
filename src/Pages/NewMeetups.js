
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../Components/layout/meetups/NewMeetuForm";

function NewMeetupsPage(){
const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
              'https://meetup-ad72c-default-rtdb.firebaseio.com/meetpus.json',
              {
                  method:'POST',
                  body: JSON.stringify(meetupData),
                headers:{
                    'content-Type': 'applications/json'
                }
              }
        
        ).then(()=>{
            history.replace('/');
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}
export default NewMeetupsPage;