export function ClearFields(inputs) {
    inputs.forEach(element => {
        element.value = null;
    });
}