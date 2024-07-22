function ContextMenu({ menuPosition, setMenuPosition, setExpenses, rowId }) {
  if (menuPosition) {
    if (!menuPosition.left) {
      return null;
    } else {
      return (
        <div className="context-menu" style={{ ...menuPosition }}>
          <div
            onClick={() => {
              setMenuPosition({});
            }}
          >
            Edit
          </div>

          <div
            onClick={() => {
              setMenuPosition({});
              setExpenses((prev) =>
                prev.filter((expense) => expense.id != rowId)
              );
              console.log(`delete executed`);
            }}
          >
            Delete
          </div>
        </div>
      );
    }
  }
}

export default ContextMenu;
