    
    function inventoryList() {
        
    let items = []
    
    const getList = ()=>{
        if(items.length <= 0){
            console.log('No Items')
        }else{
            items.forEach(item =>{
                console.log(item)
            })
        }
    }

    const validarArray = (items) =>{
        (items.length >= 1)
        ? 1
        : 0
    }

   
    const add = (name) =>{
        
        if(validarArray){
            if( items.find(val => val.toLocaleLowerCase() === name.toLocaleLowerCase()) ){
                return items
            }
        }
        return items = [...items, name]
    }

    const remove = (name) =>{

        if(validarArray){
            if( items.find(val => val.toLocaleLowerCase() === name.toLocaleLowerCase()) ){
               return items = items.filter(item =>  item.toLocaleLowerCase() !== name.toLocaleLowerCase() )
            }
            return items
        }else{
            console.log('No Items');
        }
    }

    return {
        getList: getList(),
        add: add(),
        remove: remove()
    }

}

    const newInventario = inventoryList();
    newInventario.add('Yuca')

