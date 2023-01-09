import { useEffect } from "react";

function useDocumentTitle(pageTitle: string) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;
