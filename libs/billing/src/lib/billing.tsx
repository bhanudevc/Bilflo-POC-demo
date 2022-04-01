import styles from './billing.module.scss';

/* eslint-disable-next-line */
export interface BillingProps {}

export function Billing(props: BillingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Billing!</h1>
    </div>
  );
}

export default Billing;
