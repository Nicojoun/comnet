import '../../assets/styles/Question.scss';

function Question() {
  return (
    <div className='question'>
      <h1 className='question-hero'>F.A.Q.</h1>
      <div className='questionask'>
        <h2 className='question-title'>Questions fréquentes</h2>
        <h3 className='question-subtitle'>Question 1</h3>
        <p className='question-text'>
          Voici une r??ponse courte ?? la question 1.
        </p>
        <h3 className='question-subtitle'>Question 2</h3>
        <p className='question-text'>
          Voici une r??ponse courte ?? la question 2.
        </p>
      </div>
    </div>
  );
}

export default Question;
