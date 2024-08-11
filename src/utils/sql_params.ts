export const insert_param = (params: string[]): string => {
    return `(${params.map(param => `'${param}'`).join(', ')})`;
}

export const fucked_param_gen = (params: string[]): string => {
    const columns = [];
    for (let i = 0; i < params.length; i += 2) {
        columns.push(`${params[i]} ${params[i + 1]}`);
    }
    return `(${columns.join(', ')})`;
}