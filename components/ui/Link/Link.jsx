import Link from 'next/link'

const NextLink = ({ href = 'asdasd', children, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

export default NextLink
