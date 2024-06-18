import ContactCard from "../components/ContactCard"

export const metadata = {
    title: 'Contact page',
    description: 'My Contacts',
}
export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <ContactCard />
        </div>
    )
}
