import { Grid, Paper, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface IProps {
  issueTitle: string
}

const ProjectCard: FC<IProps> = ({ issueTitle }) => {
  return (
    <div className="project_card">
      <Paper elevation={1} sx={{ p: '10px', m: '1rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Issue Title: {issueTitle}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="body1">Opened: yesterday</Typography>
                <Typography variant="body1">Priority: medium</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default ProjectCard;
