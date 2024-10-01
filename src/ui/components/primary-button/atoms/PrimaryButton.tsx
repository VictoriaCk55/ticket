import React from 'react';
import styles from './PrimaryButton.modulo.scss';
import type { ButtonProps } from './types/IProps';

function PrimaryButton({
  size = 'medium',
  backgroundColor = '#1ea7fd',
  color = 'white',
  label,
  borderRadius = '3em',
  icon,
  ...props
}: ButtonProps) {
  const buttonStyle = {
    backgroundColor,
    color,
    borderRadius
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button--${size}`]} ${styles['button--primary']}`}
      style={buttonStyle}
      {...props}
    >
      {label}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default PrimaryButton;