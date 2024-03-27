import Link from 'next/link'
import React from 'react'

export default function Paginator({previousLink, nextLink, setPage, page, pages}) {
    const handleNextPage = () => {
        setPage(Math.min(pages, page + 1));
    };

    const handlePrevPage = () => {
        setPage(Math.max(1, page - 1));
    };

    return (
        <div className="bg-white p-4 flex items-center justify-center flex-wrap mt-[50px]">
            <nav aria-label="Page navigation">
                <ul className="inline-flex">
                    <li>
                        {previousLink ? (
                                <button 
                                    className="h-10 px-5 text-[#64D1FF] transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-[#bdebff]"
                                    onClick={handlePrevPage}   
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </button>
                        ) : (
                            <button disabled className="h-10 px-5 text-[#64D1FF] transition-colors duration-150 rounded-l-lg focus:shadow-outline bg-gray-200 cursor-not-allowed">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </button>
                        )}
                    </li>
                    {/* <li>
                        <button className="h-10 px-5 text-[#64D1FF] transition-colors duration-150 focus:shadow-outline hover:bg-[#bdebff]">
                            1
                        </button>
                    </li>
                    <li>
                        <button className="h-10 px-5 text-white transition-colors duration-150 bg-[#64D1FF] border border-r-0 border-[#64D1FF] focus:shadow-outline">
                            2
                        </button>
                    </li>
                    <li>
                        <button className="h-10 px-5 text-[#64D1FF] transition-colors duration-150 focus:shadow-outline hover:bg-[#bdebff]">
                            3
                        </button>
                    </li> */}
                    <li>
                        {nextLink ? (
                            <button 
                                className="h-10 px-5 text-[#64D1FF] transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-[#bdebff]"
                                onClick={handleNextPage}   
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </button>
                        ) : (
                            <button disabled className="h-10 px-5 text-[#64D1FF] transition-colors duration-150 rounded-r-lg focus:shadow-outline bg-gray-200 cursor-not-allowed">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </button>
                        )}

                    </li>
                </ul>
            </nav>
        </div>
    )
    }
