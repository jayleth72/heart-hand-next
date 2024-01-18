import Image from 'next/image'
import styles from './card.module.sass'

const Card = () => (
    <div className={styles.card}>
        <div className={styles.card_imageWrap}>
            <div className={styles.card_image}>
                <Image src = "/feet.png" alt="thumbnail" fill={true} />
            </div>
        </div>

        <div className={styles.card_content}>
            <div className={`${styles.card_label} h6 mb-10 c-orange`}>Heart and Hand philosophy</div>
            <div className={`${styles.card_title} h3 mb-20`}>Our story and how we got here</div>
            <p className={`${styles.card_summary} fw-600`}>The corona light shares a shower with a Fosters. A blue moon usually befriends an obsequious shot. A Busch finds lice on another Hazed and Infused defined by a bud light. When a drunk Strohs is hammered, a rattlesnake living with a Wolverine Beer slurly pees on the Keystone light.</p>
        </div>
    </div>

)

export default Card