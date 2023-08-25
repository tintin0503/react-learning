import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

type Issue = {
  number: number
  title: string
  state: string
}

type IssuesProps = {
  propX?: string
  propY?: string
  propZ?: boolean
}

export const Issues: FC<IssuesProps> = () => {
  const [issues, setIssues] = useState<Issue[]>([])

  // When we use the useEffect hook with an empty array [] on the dependencies
  // this represents the componentDidMount method (will be executed when the component is mounted)
  useEffect(() => {
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((response: any) => {
        setIssues(response.data)
      })
  }, [])

  return (
    <>
      <h1>ContentPI Issues</h1>
      {issues.map((issue: Issue) => (
        <p key={issue.title}>
          <strong>#{issue.number}</strong>
          <a
            href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
            target="_blank"
          >
            {issue.title}
          </a>
          {'   '}
          <strong>Status: {issue.state}</strong>
        </p>
      ))}
    </>
  )
}
