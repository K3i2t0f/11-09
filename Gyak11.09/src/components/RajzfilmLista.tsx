
import { useEffect, useState } from "react";
import Rajzfilm from "./Rajzfilm";

interface RajzfilmAdat {
  id: number;
  cim: string;
  studio: string;
  megjelenesEve: number;
  premier: string;
}

function RajzfilmLista() {
  const [rajzfilmek, setRajzfilmek] = useState<RajzfilmAdat[]>([]);

  useEffect(() => {
    async function Betoltes() {
      const valasz = await fetch("/rajzfilmek.json");
      const adatok: RajzfilmAdat[] = await valasz.json();
      setRajzfilmek(adatok);
    }

    Betoltes();
  }, []);

  const legkorabbiEv = Math.min(
    ...rajzfilmek.map((r) => r.megjelenesEve)
  );

  const legkesobbiEv = Math.max(
    ...rajzfilmek.map((r) => r.megjelenesEve)
  );

  return (
    <div>
      <div className="card mb-4 bg-light">
        <div className="card-body">
          <h3>Statisztikák</h3>
          <p>Rajzfilmek száma: <b>{rajzfilmek.length}</b></p>
          <p>Legkorábbi megjelenés: <b>{rajzfilmek.length ? legkorabbiEv : "-"}</b></p>
          <p>Legkésőbbi megjelenés: <b>{rajzfilmek.length ? legkesobbiEv : "-"}</b></p>
        </div>
      </div>

      <div className="row">
        {rajzfilmek.map((rajzfilm) => (
          <div className="col-md-4 mb-4" key={rajzfilm.id}>
            <Rajzfilm adat={rajzfilm} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RajzfilmLista;
