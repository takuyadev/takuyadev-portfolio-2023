// Import and insert into styled components for usage
const DefaultBtn = `
    display:inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    padding: 0.5em 1.5em;
    border: transparent;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;  
    transition: background 0.1s cubic-bezier(0.61, 1, 0.88, 1);
    cursor: pointer;
    & > svg {
        width: 24px;
    }
    
    &:hover, &:focus{
        outline: none;  
    }
`

export { DefaultBtn }