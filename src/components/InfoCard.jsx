import "../styles/components/infoCard.sass";

const InfoCard = ({ icon, title, content }) => {
  return (
    <div className='info-card'>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
