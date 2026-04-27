import styles from './JobListing.module.scss';
import { mockJobs } from '@/data/mockJobs';
import { JobRow } from '../JobRow/JobRow';

export function JobListing() {
	return (
		<div className={styles.page}>
			<section className={styles.container}>
				{mockJobs.map(jobItem => (
					<JobRow key={jobItem.id} job={jobItem} />
				))}
			</section>
		</div>
	);
}
