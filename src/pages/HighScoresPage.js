import React, { useEffect, useState } from 'react';
import { useFirebase } from '../Firebase/';

const HighScoresPage = () => {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    console.log('get');
    firebase.scores().once('value', snapshot => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setloading(false);
    });
  }, [firebase]);

  const formatScoreData = firebaseScores => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val['key'] = key;
      scores.push(val);
    }
    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };

  return (
    <>
      {loading ? (
        <div id='loader'></div>
      ) : (
        <>
          <h1 className='animated bounceIn'>High Scores</h1>
          <div id='highScoresList'>
            {scores.map(score => (
              <li key={score.key} className='high-score animated fadeInUp'>
                {score.name} - {score.score}
              </li>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default HighScoresPage;
