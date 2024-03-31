import styles from "../styles/Tag.module.css"

export default function Tag({category, number}) {
    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.tag}>{category}</h4>
                <h4 className={styles.tag}>{number}</h4>
            </div>
        </>
    )
}