Object.filter = (obj, predicate) => {
    const newObj = Object.keys(obj).filter(key => predicate(obj[key]));

    return newObj.length !== 0 ? Object.assign(
        ...newObj.map(key => ({
            [newObj.indexOf(key) + 1] : obj[key]
        }))
        ) : {}
}