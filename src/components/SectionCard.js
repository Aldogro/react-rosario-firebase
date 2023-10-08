const SectionCard = ({ title, subtitle, variant, children }) => {
    return (
        <>
            {title}
            {subtitle}
            <div className={`section ${variant}`}>
                {children}
            </div>
        </>
    );
};

export default SectionCard;
