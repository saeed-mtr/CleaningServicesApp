import './SmallParagraph.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function SmallParagraph() {
  return (
    <>
      <div className='smallparagraph'>
        <p>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            השירותים שלנו מספקים ניקיון מושלם ומקיף לכל הבתים והמשרדים בעיר.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            צוות הניקיון שלנו מקצועי וידע עשיר בשיטות וחומרים המבטיחים תוצאות
            מרשימות.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            אנו מציעים שירותי ניקיון מותאמים אישית, שמתאימים לצרכים ולתקציב שלך.
          </li>
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{
                color: 'rgb(0, 102, 255)',
                marginLeft: '15px',
              }}
              fontSize='1.7em'
            />
            לא רק אנו מנקים כיף, אלא אנו גם משמרים את סביבת העבודה והבית שלך
            בסדר ובניקיון מושלם.
          </li>
          <br />
          <h3>
            בחר בשירות הניקיון המוביל בעיר - חווית ניקוי ברמה גבוהה ושירות אדיב
            ומקצועי ללקוחותינו היקרים.
          </h3>
        </p>
      </div>
    </>
  );
}
