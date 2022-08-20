
export default function Index() {
    const showAlert = () => {
        const message = "Isso é um alerta!!";
        alert(message);
    }
    return (<div>
        <button onClick={showAlert}>Alert</button>
    </div>)
}