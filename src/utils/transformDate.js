export const convertIsoDate = () => {
    return new Date().toISOString();
};

export const fromIsoDate = (isoDate) => {
    const date = new Date(isoDate);

    const transformedDate = date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });

    return transformedDate;
};
