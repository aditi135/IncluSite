import styles from "../styles/TagContainer.module.css"
import Tag from "./Tag.js"

export default function TagContainer({
    screenReader, 
    textContrast,
    closedCaptions,
    noAudio}) {
    return (
        <>
            <div className={styles.container}>
                <Tag 
                    category={"SR"}
                    number={screenReader}
                />
                <Tag 
                    category={"TC"}
                    number={textContrast}
                />
                <Tag 
                    category={"CC"}
                    number={closedCaptions}
                />
                <Tag 
                    category={"NA"}
                    number={noAudio}
                />    

            </div>
        </>
    )
}