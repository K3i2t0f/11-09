
import { useState } from "react";

interface RajzfilmAdat {
  id: number;
  cim: string;
  studio: string;
  megjelenesEve: number;
  premier: string;
}

interface Props {
  adat: RajzfilmAdat;
}

function Rajzfilm({ adat }: Props) {
  const [datumLatszik, setDatumLatszik] = useState(true);

  let kategoria = "";

  if (adat.megjelenesEve < 2000) {
    kategoria = "Klasszikus rajzfilm";
  } else if (adat.megjelenesEve <= 2010) {
    kategoria = "Régebbi rajzfilm";
  } else {
    kategoria = "Modern rajzfilm";
  }

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{adat.cim}</h2>

        <p className="card-text">
          <i>{adat.studio}</i>
        </p>

        <p className="card-text">
          <b>{adat.megjelenesEve}</b>
        </p>

        <p className="text-primary">{kategoria}</p>

        {datumLatszik && (
          <p>Premier dátuma: {adat.premier}</p>
        )}

        <button
          className="btn btn-primary"
          onClick={() => setDatumLatszik(!datumLatszik)}
        >
          {datumLatszik ? "Dátum elrejtése" : "Dátum megjelenítése"}
        </button>
      </div>
    </div>
  );
}

export default Rajzfilm;
