import styles from './Avatar.module.css'

function Avatar(props) {
  const hasBorder = props.hasBorder != false;

  return (
    <img 
      className={hasBorder ? styles.profile_imgWithBorder : styles.profile_img} 
      src={props.src} 
    />
  );
}

export default Avatar;