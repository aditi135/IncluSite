import styles from "../styles/Filters.module.css"

export default function Filters() {
    return (
        <>
            <div className={styles.container}>
                <h2>Accessibility Filters</h2>

                <h3>Visual</h3>
                <div className={styles.checkboxContainer}>
                    <label className={styles.checkboxes}>Screen-Reader Optimized
                        <input type="checkbox" id="screenReader" name="screenReader"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkboxes}>Text Contrast
                        <input type="checkbox" id="textContrast" name="textContrast"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkboxes}>Low Movement
                        <input type="checkbox" id="lowMovement" name="lowMovement"/>
                        <span className={styles.checkmark}></span>
                    </label>
                </div>


                <h3>Audio</h3>
                <div className={styles.checkboxContainer}>
                    <label className={styles.checkboxes}>Closed Captioning
                        <input type="checkbox" id="captioning" name="captioning"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkboxes}>No Audio Clips
                        <input type="checkbox" id="noAudioClips" name="noAudioClips"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkboxes}>Few Audio Clips
                        <input type="checkbox" id="fewAudioClips" name="fewAudioClips"/>
                        <span className={styles.checkmark}></span>
                    </label>
                </div>


                <h3>Keyboard Access</h3>
                <div className={styles.checkboxContainer}>
                    <label className={styles.checkboxes}>AccessKeys
                        <input type="checkbox" id="accessKeys" name="accessKeys"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkboxes}>Skip-To Functionality
                        <input type="checkbox" id="skipTo" name="skipTo"/>
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>


        </>
    )
}