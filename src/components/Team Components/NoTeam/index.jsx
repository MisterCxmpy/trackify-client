import React from 'react'
import styles from './index.module.css'
import { RiTeamLine } from "react-icons/ri"
import { MdOutlineGroupAdd } from "react-icons/md"

export default function NoTeam() {
  return (
    <div className={styles['teams-content']}>
      <div className={`${styles['item']} ${styles["teams-about"]}`}>
        <div className={styles['heading']}>
          <h1>What are teams?</h1>
        </div>
        <div className={styles['content']}>
          <div className={styles['desc']}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo natus atque nisi, omnis beatae? Facere, voluptatum ratione doloremque esse praesentium nesciunt ex eligendi provident! Repudiandae dolorum dolor earum nulla?
            Neque voluptatum nobis aut aspernatur, vel ducimus dignissimos explicabo ad dolore eos eligendi cum vitae fugiat. Minus dignissimos ab ipsam labore sit rerum voluptatem nam obcaecati ipsa consequatur, dolores doloremque?
            Porro quidem quos voluptatem ea, illo laborum aliquam id quo corporis voluptate, qui reprehenderit ratione neque sequi in, sit rerum. Modi laborum molestias, perspiciatis voluptas optio distinctio incidunt in reiciendis?
            Provident molestiae qui dolorem nostrum maxime laudantium magnam esse delectus, voluptatibus impedit, commodi fugit omnis illum eveniet, excepturi laborum atque? Magni, qui tempora! Deleniti quo sed incidunt ad, doloribus eligendi!
            Quibusdam consequuntur tempora magni blanditiis saepe repellendus rerum hic temporibus iure alias corrupti corporis veniam doloribus, deserunt nostrum qui deleniti animi eius officia nesciunt magnam voluptatem itaque sapiente! Non, aliquam.</p>
            <RiTeamLine />
          </div>
          <button>join a team</button>
        </div>
      </div>
      <div className={`${styles['item']} ${styles["personal-about"]}`}>
        <div className={styles['heading']}>
            <h1>Personal Information</h1>
          </div>
          <div className={styles['content']}>
            <div className={styles['unique-code']}>
              <h1>Account ID: <span>12345678</span></h1>
              <button>copy id</button>
            </div>
            <div className={styles['name']}>
              <h1>Name: <span>Cosgun Hussein</span></h1>
              <button>copy name</button>
            </div>
          </div>
      </div>
      <div className={`${styles['item']} ${styles["create-team"]}`}>
        <div className={styles['heading']}>
          <h1>Create Team</h1>
        </div>
        <div className={styles['content']}>
          <div className={styles['desc']}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo natus atque nisi, omnis beatae? Facere, voluptatum ratione doloremque esse praesentium nesciunt ex eligendi provident! Repudiandae dolorum dolor earum nulla?
            Neque voluptatum nobis aut aspernatur, vel ducimus dignissimos explicabo ad dolore eos eligendi cum vitae fugiat. Minus dignissimos ab ipsam labore sit rerum voluptatem nam obcaecati ipsa consequatur, dolores doloremque?
            Porro quidem quos voluptatem ea, illo laborum aliquam id quo corporis voluptate, qui reprehenderit ratione neque sequi in, sit rerum. Modi laborum molestias, perspiciatis voluptas optio distinctio incidunt in reiciendis?
            Provident molestiae qui dolorem nostrum maxime laudantium magnam esse delectus, voluptatibus impedit, commodi fugit omnis illum eveniet, excepturi laborum atque? Magni, qui tempora! Deleniti quo sed incidunt ad, doloribus eligendi!
            Quibusdam consequuntur tempora magni blanditiis saepe repellendus rerum hic temporibus iure alias corrupti corporis veniam doloribus, deserunt nostrum qui deleniti animi eius officia nesciunt magnam voluptatem itaque sapiente! Non, aliquam.</p>  
            <MdOutlineGroupAdd />
          </div>
          <button>create a team</button>
        </div>
      </div>
    </div>
  )
}
