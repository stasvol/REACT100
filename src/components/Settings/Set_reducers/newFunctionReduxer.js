
export const changeDataRedux = (element, elemId, obyPropName, newObjProperty) => {

    return element.map(u => {
        if (u[obyPropName] === elemId) {
            return {...u, ...newObjProperty}
        }
        return u
    })
}