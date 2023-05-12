import { useState, useEffect } from "react";

function Ejemplo({ busqueda }) {
  const [productos, setProductos] = useState([]);
  const [query, setQuery] = useState("");
  const [detalle, setDetalle] = useState({ id: "-", producto: "-", img: "-" });

  useEffect(() => {
    console.log(query);
    setQuery(busqueda);
    //LLamar a API de Mercado Libre
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=" + query)
      .then((resp) => resp.json())
      .then((prods) => {
        console.log(prods);
        setProductos(prods.results);
      });
  }, [busqueda]);

  return (
    <>
      <div className="border my-5 p-2">
        <small>{detalle.id}</small>
        <h3>{detalle.producto}</h3>
        <img src={detalle.img} />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={p.thumbnail} />
                </td>
                <td className="align-middle">
                  <div>
                    <small>{p.id}</small>
                    <p>{p.title}</p>
                    <button
                      onClick={() => {
                        setDetalle({
                          id: p.id,
                          producto: p.title,
                          img: p.thumbnail,
                        });
                      }}
                      className="btn btn-sm btn-success"
                    >
                      + info
                    </button>
                  </div>
                </td>
                <td className="align-middle">
                  {p.currency_id} {p.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Ejemplo;
