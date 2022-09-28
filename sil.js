var s = "bl"

var o = { k: 5, m: "s" }

function Foo({ props }) {
  return (
    <div>
      <h1>Masallah</h1>
    </div>
  )
}

function Greet(user) {
  return (
    <>
      <Foo
        p1="1"
        p2="2"
      />
    </>
  )
}

// {user ? `Welcome back, ${user.name}!` : "Greetings, traveler! Sign up today!"}
function greet(user) {
  return user ? `Welcome back, ${user.name}!` : "Greetings, traveler! Sign up today!"
}
