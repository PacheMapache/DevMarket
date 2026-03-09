export default function Toast({message}) {
    return(
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-fadeIn">
            {message}
        </div>

    );
}

// TODO: Enviar la funcion onAddToCart a Products.jsx
// TODO: Editar el ProductCard.jsx para manejar el evento
// TODO: Actualizar el navbar dinamicamente
