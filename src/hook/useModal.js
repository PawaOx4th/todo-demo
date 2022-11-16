import React, { useEffect, useState } from "react"

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleEscapeOnCloseModal = (event) => {
    if (event.code === "Escape") {
      setIsOpenModal(false)
    }
  }

  useEffect(() => {
    if (isOpenModal) {
      document.documentElement.style.overflowY = "hidden"
    }

    return () => {
      document.documentElement.style.overflowY = "auto"
    }
  }, [isOpenModal])

  useEffect(() => {
    document.addEventListener("keyup", handleEscapeOnCloseModal, false)

    return () => {
      document.removeEventListener("keyup", handleEscapeOnCloseModal, false)
    }
  }, [])

  return {
    isOpenModal,
    setIsOpenModal,
    handleEscapeOnCloseModal
  }
}
