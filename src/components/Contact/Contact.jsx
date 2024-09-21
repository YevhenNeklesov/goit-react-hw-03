import s from "./Contact.module.css"

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={s.box}>
            <div className={s.contactContainer}>
              <p className={s.name}>{name}</p>
              <a className={s.number} href="">{number}</a>
            </div>
            <button className={s.btn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact