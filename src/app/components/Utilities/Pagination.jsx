const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        }
        )
    }

    const handleFirstPage = () => {
        setPage(1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage(lastPage)
        scrollTop()
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        if (page == 1) return

        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div>
            <div className="text-color-primary flex justify-center gap-4 m-8">
                <p className="cursor-pointer transition-all hover:text-color-accent" onClick={handleFirstPage}>{'<<'}</p>
                <p className="cursor-pointer transition-all hover:text-color-accent" onClick={handlePrevPage}>Prev</p>
                <p>{page} of {lastPage}</p>
                <p className="cursor-pointer transition-all hover:text-color-accent" onClick={handleNextPage}>Next</p>
                <p className="cursor-pointer transition-all hover:text-color-accent" onClick={handleLastPage}>{'>>'}</p>
            </div>
        </div>
    )
}

export default Pagination