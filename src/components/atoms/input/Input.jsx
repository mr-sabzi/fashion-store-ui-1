export default function Input({ type, placholder, classname, onChange}) {
    return <input type={type} placeholder={placholder} className={classname} onChange={onChange}/>
}