function createFrom(numbers = '', checkResult = true) {
    return (
        `
        <form action="checkform" method="GET">
            <p>Просто форма:<br>
                Введите ваше Любимое число: <input name="numbers" value="${numbers}"><br>
                    <input type="submit">
            </p>
            ${checkResult ? '' : 'это не число!!!'}
        </form>
        `
    )
}

function checkDataFn({ numbers }) {
    if (numbers === undefined) return undefined;
    return numbers !== '' && !isNaN(numbers)

}

module.exports = {
    createFrom,
    checkDataFn
}