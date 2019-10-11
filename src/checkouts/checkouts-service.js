const CheckoutsService = {
  checkoutTools(db, checkoutsObj) {
    return db
      .insert(checkoutsObj)
      .into('checkouts')
      .returning(['tool_id', 'return_date'])
      .then(rows => {
        return rows
      })
    },
  checkUserExists(db, id) {
    return db
      .from('users')
      .where('id', id)
      .first()
  },
}

module.exports = CheckoutsService;