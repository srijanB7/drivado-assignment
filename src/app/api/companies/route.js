export async function GET() {
    const res = await fetch("https://673736a9aafa2ef222330e54.mockapi.io/company")
    const companies = await res.json()

    return Response.json({ companies })
  }