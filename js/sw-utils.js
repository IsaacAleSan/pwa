//archivo auxiliar del SW, para pasar la logica de una funcion 
//Guardar en el cache dinamico
//isaac

function actualizarCacheDinamico( dinamucCache, req, res){


    if( res.ok){
        
        return caches.open( dinamucCache).then(cache => {
            
            cache.put(req, res.clone());

            return res.clone();

        });

    }   else{
        return res;
    }


    
}