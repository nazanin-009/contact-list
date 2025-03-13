import { Face, Face2, Face4, Face5 } from "@mui/icons-material"
import { createContext, ReactNode, useState } from "react"
import NewContact from "../../components/contacts/NewContact"

type Contact = {
name:string
phone:string
email:string

}
type iconContact={
 icon1:any
 icon2:any
 icon3:any
 icon4:any
}
type ContactsDataContextType = {
   contacts: Contact[]
   addContact: (contact:Contact) => void
   removeContactAt:(index:number) => void
   iconContact:(index:number) => void
}
export const ContactContext = createContext <ContactsDataContextType>({
    contacts:[],
    addContact: ()=>{},
    removeContactAt:() => {},
    iconContact:() => {}
}) 

export default function ContactProvider({children}:{children:ReactNode}) {
   
    const [contacts,setContacts] = useState <Contact[]>([{name:'amir',phone:"09056082788",email:"amir@gmail.com"}])
   
const addContact = (newContact: Contact) => {
   const nc=[...contacts]
   nc.push(newContact)
     setContacts(nc)
}
const removeContactAt=(index:number)=>{
   const newContact=[...contacts]
   newContact.splice(index,1)
   setContacts(newContact)
}
const iconContact=(index:number)=>{
    const newIcon=[...contacts]
    newIcon.splice(index)
    setContacts(newIcon)
}
return <ContactContext.Provider value={{contacts,addContact,removeContactAt,iconContact}}>
{children}
</ContactContext.Provider>
}