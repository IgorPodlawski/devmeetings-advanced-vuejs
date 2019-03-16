//1/ 6. The service must be imported in VotesRepository
import FirebaseService from './firebase.service';

//1/ 7. Here we define what kind of document reference we want to take from firebase
const votesRef = FirebaseService.collection('votes');

//10/ 8. Let's export some methods for later use.
export default {
  votesRef,
  addVote(vote) {
    return votesRef.add({ ...vote });
  },
  async resetVotes() {
    const snapshotsArray = await votesRef.get();
    snapshotsArray.forEach(el => votesRef.doc(el.id).delete());
  },
};